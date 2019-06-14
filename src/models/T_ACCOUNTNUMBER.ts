import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_ACCOUNTNUMBER', {schema: 'dbo' } )
export class T_ACCOUNTNUMBER {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 20,
        name: 'ANB_ACCOUNTNUMBER_C',
        })
    public ANB_ACCOUNTNUMBER_C: string;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'ANB_DESCRIPNED_C',
        })
    public ANB_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 50,
        name: 'ANB_DESCRIPFRA_C',
        })
    public ANB_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 15,
        name: 'ANB_AUTHORISEDUSER_C',
        })
    public ANB_AUTHORISEDUSER_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ANB_FLAG1_C',
        })
    public ANB_FLAG1_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ANB_FLAG2_C',
        })
    public ANB_FLAG2_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'ANB_USERID_C',
        })
    public ANB_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ANB_FLAGDELETE_C',
        })
    public ANB_FLAGDELETE_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ANB_FLAG_SAV_C',
        })
    public ANB_FLAG_SAV_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'ANB_FLAG_KITCHEN_C',
        })
    public ANB_FLAG_KITCHEN_C: string | null;

}
