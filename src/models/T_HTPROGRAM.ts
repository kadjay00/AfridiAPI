import {BaseEntity, Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId} from 'typeorm';

@Entity('T_HTPROGRAM', {schema: 'dbo' } )
@Index('IX_HTPROGRAM_PKINDEX', ['HTP_HTPROGRAMID_C'], {unique: true})
export class T_HTPROGRAM {

    @Column('varchar', {
        nullable: false,
        primary: true,
        length: 2,
        name: 'HTP_HTPROGRAMID_C',
        })
    public HTP_HTPROGRAMID_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'HTP_DESCRIPNED_C',
        })
    public HTP_DESCRIPNED_C: string;

    @Column('varchar', {
        nullable: false,
        length: 30,
        name: 'HTP_DESCRIPFRA_C',
        })
    public HTP_DESCRIPFRA_C: string;

    @Column('varchar', {
        nullable: true,
        length: 8,
        name: 'HTP_USERID_C',
        })
    public HTP_USERID_C: string | null;

    @Column('char', {
        nullable: true,
        name: 'htp_flagdelete_C',
        })
    public htp_flagdelete_C: string | null;

}
