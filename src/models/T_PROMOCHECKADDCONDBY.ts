import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PROMOCHECKADDCONDBY', {schema: 'dbo' } )
export class T_PROMOCHECKADDCONDBY {

    @Column('tinyint', {
        nullable: false,
        primary: true,
        name: 'PAC_CHECKADDCONDBY_N',
        })
    public PAC_CHECKADDCONDBY_N: number;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'PAC_DESCRIPNED_C',
        })
    public PAC_DESCRIPNED_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'PAC_DESCRIPFRA_C',
        })
    public PAC_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: true,
        length: 1,
        name: 'PAC_FLAGDELETE_C',
        })
    public PAC_FLAGDELETE_C: string | null;

}
