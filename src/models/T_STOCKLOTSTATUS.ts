import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_STOCKLOTSTATUS', {schema: 'dbo' } )
@Index('IX_STOCKLOTSTA_CODE', ['SLS_CODE_C'])
export class T_STOCKLOTSTATUS {

    @Column('char', {
        nullable: false,
        primary: true,
        name: 'SLS_CODE_C',
        })
    public SLS_CODE_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SLS_DESCRIPFRA_C',
        })
    public SLS_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'SLS_DESCRIPNED_C',
        })
    public SLS_DESCRIPNED_C: string;

}
