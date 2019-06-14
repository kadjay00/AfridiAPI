import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_SELLINGUNITCODE', {schema: 'dbo' } )
@Index('IX_SELLINGUNITCODE_PKINDEX', ['SUC_SELLINGUNITCODE_C'], {unique: true})
export class T_SELLINGUNITCODE {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 5,
        name: 'SUC_SELLINGUNITCODE_C',
        })
    public SUC_SELLINGUNITCODE_C: string;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SUC_DESCRIPNED_C',
        })
    public SUC_DESCRIPNED_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 30,
        name: 'SUC_DESCRIPFRA_C',
        })
    public SUC_DESCRIPFRA_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'SUC_USERID_C',
        })
    public SUC_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'suc_flagdelete_C',
        })
    public suc_flagdelete_C: string | null;

    @Column('varchar', {
        nullable: true,
        length: 2,
        name: 'SUC_CATGROUPID_C',
        })
    public SUC_CATGROUPID_C: string | null;

}
