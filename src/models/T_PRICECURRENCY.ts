import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_PRICECURRENCY', {schema: 'dbo' } )
@Index('IX_PRICECURRENCY_PKINDEX', ['PRC_PRICECURRENCY_C'], {unique: true})
export class T_PRICECURRENCY {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 3,
        name: 'PRC_PRICECURRENCY_C',
        })
    public PRC_PRICECURRENCY_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PRC_DESCRIPNED_C',
        })
    public PRC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'PRC_DESCRIPFRA_C',
        })
    public PRC_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'PRC_USERID_C',
        })
    public PRC_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'prc_flagdelete_C',
        })
    public prc_flagdelete_C: string | null;

}
